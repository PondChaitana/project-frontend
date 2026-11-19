export default function Login() {
  const handleSSO = () => {
    // TODO: redirect ไปยัง KMUTNB SSO เช่น window.location.href = 'https://...'
    console.log('sign in with SSO')
  }

  return (
    <div className="mx-auto my-24 max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
      {/* หัวการ์ด */}
      <div className="bg-brand px-8 py-5">
        <h1 className="text-2xl text-white">SSO Login</h1>
      </div>

      {/* เนื้อการ์ด */}
      <div className="flex items-center justify-center px-8 py-20">
        <button
          onClick={handleSSO}
          className="w-full max-w-lg rounded-xl border border-brand py-4 text-2xl text-brand transition hover:bg-brand hover:text-white"
        >
          Sign in with KMUTNB SSO
        </button>
      </div>
    </div>
  )
}
