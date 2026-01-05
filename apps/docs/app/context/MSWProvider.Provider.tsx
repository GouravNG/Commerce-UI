"use client"

import { useEffect, useState } from "react"

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false)

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "true" || true) {
      import("../../mocks/browser").then(({ worker }) => {
        worker
          .start({
            onUnhandledRequest: "bypass",
          })
          .then(() => {
            setMswReady(true)
          })
      })
    }
  }, [])

  return <>{mswReady && children}</>
}
