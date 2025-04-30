import { Suspense, lazy, useEffect, useState } from "react"
const Spline = lazy(() => import("@splinetool/react-spline"))
export default function SplineScene() {
  return (
    <>
      <Suspense fallback={null}>
        <Spline
          scene="/crystal_ball.spline"
        />
      </Suspense>
    </>
  )
}
