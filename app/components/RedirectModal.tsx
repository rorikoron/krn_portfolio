'use client'

import { useEffect, useRef, useState } from 'react'
import style from './RedirectModal.module.scss'

const NEW_SITE_URL = 'https://rorikoron.net/'
const COUNTDOWN_SECONDS = 5
const STAY_KEY = 'krn:stay-on-old-site'

const RedirectModal = () => {
    const [open, setOpen] = useState(false)
    const [remaining, setRemaining] = useState(COUNTDOWN_SECONDS)
    const goButtonRef = useRef<HTMLAnchorElement>(null)

    // Not read during render: the server can't see sessionStorage, so doing so would cause a hydration mismatch.
    // sessionStorage, not localStorage: choosing to stay once shouldn't hide the move notice on future visits.
    useEffect(() => {
        let stayed = false
        try {
            stayed = sessionStorage.getItem(STAY_KEY) === '1'
        } catch {}
        if (!stayed) setOpen(true)
    }, [])

    // Not a server-side redirect() (as before): that would leave visitors no chance to choose to stay.
    // replace(), not assign(): Back shouldn't return to this page and re-trigger the countdown.
    useEffect(() => {
        if (!open) return
        goButtonRef.current?.focus()

        if (remaining <= 0) {
            window.location.replace(NEW_SITE_URL)
            return
        }
        const timer = setTimeout(() => setRemaining((s) => s - 1), 1000)
        return () => clearTimeout(timer)
    }, [open, remaining])

    const stay = () => {
        try {
            sessionStorage.setItem(STAY_KEY, '1')
        } catch {}
        setOpen(false)
    }

    // Esc stays rather than redirects: dismissing a dialog shouldn't send the visitor to another domain.
    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') stay()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open])

    if (!open) return null

    return (
        <div className={style.overlay}>
            <div
                className={style.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="redirect-modal-title"
                aria-describedby="redirect-modal-desc"
            >
                <h2 id="redirect-modal-title" className={style.title}>
                    サイトを移転しました
                </h2>
                <p id="redirect-modal-desc" className={style.desc}>
                    このサイトの内容は古くなっています。<br />
                    新しいサイト <a href={NEW_SITE_URL}>rorikoron.net</a> へ移動しますか？
                </p>
                <p className={style.countdown} aria-live="polite">
                    {remaining}秒後に自動で移動します
                </p>
                <div
                    className={style.progress}
                    style={{ animationDuration: `${COUNTDOWN_SECONDS}s` }}
                />
                <div className={style.actions}>
                    <button type="button" className={style.stay} onClick={stay}>
                        このまま見る
                    </button>
                    <a ref={goButtonRef} href={NEW_SITE_URL} className={style.go}>
                        新しいサイトへ
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RedirectModal
