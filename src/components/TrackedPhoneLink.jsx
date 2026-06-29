export default function TrackedPhoneLink({
  phone,
  label,
  conversionLabel,
  style,
  className,
  children,
}) {
  function handleClick() {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

    window.gtag('event', 'phone_click', {
      event_category: 'phone_call',
      event_label: label || phone,
      phone_number: phone,
    })

    if (conversionLabel) {
      window.gtag('event', 'conversion', {
        send_to: conversionLabel,
        event_category: 'phone_call',
        event_label: label || phone,
      })
    }
  }

  return (
    <a
      href={`tel:${phone}`}
      aria-label={label}
      className={className}
      style={style}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
