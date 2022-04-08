import React from 'react'

function Alert(props) {
  return (
    <>
    <div style={{height:'40px',marginTop: '120px'}} className="text-center container w-50">
      {props.alert && (
        <div className="container">
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>
              {props.alert.msg}
            </strong>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Alert