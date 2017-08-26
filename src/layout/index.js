// import Packages
import React from 'react'

// import local components
import Navigation from './Nav'
// You can import component with the other name
import Footer from './Footer'

// This is called functional component, by create like this, your component lighter than create class base component, you can see it on babel, just try create your component on babel,

// by create functional component, you can't use constructor, including the "state" in it, and react livecycle
const Layout =({children})=>{
  // It's mean you declare varible children from props.

  // if you want to import all props, just type =(props)=>
  // then you can declare one by one from props like this let {children} = props in ES6 or like this let children = props.children

  // at class base component props same with this.props
  return(
    <div className="app">
      <Navigation />

      <div className='content'>
        {children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
