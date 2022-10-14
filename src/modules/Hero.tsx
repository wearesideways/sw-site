export default function Hero({ src, alt }: any) {
  return (
    <>
      <section className={'hero'}>
        <div className={'hero-container'}>
          <img src={src} alt={alt} />
        </div>
      </section>
      <style jsx>{`
        .hero {
          display: flex;
        }
      `}</style>
    </>
  )
}
