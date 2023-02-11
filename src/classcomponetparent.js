import React, { Component } from 'react'
import Classcomponetchild from "./classcomponetchild"

export default class classcomponetparent extends Component {
  render() {
    return (
        <div>

            <h1>classcomponetparent</h1>
            
            <Classcomponetchild/>
        </div>
    )
  }
}
