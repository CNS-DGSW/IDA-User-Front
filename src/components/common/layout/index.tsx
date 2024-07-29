import React from "react"
import type { PropsWithChildren, JSXElementConstructor } from "react"
import Navbar from "../navbar"
import Footer from "../Footer"

const isHomeComponent = (value: any): value is JSXElementConstructor<any> =>
  value.name === "Home"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && isHomeComponent(child.type)) {
          return <>{child}</>
        }

        return (
          <>
            {child}
            <Footer />
          </>
        )
      })}
    </>
  )
}

export default Layout
