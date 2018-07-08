import React, { PureComponent } from 'react'
import { Message, Form } from 'semantic-ui-react'
import CenterWidget from './CenterWidget'

class RestorePassword extends PureComponent {
  render() {
    return (
      <CenterWidget>
        <Form success>
          <Message
            success
            header='Success'
            content="Password was successfully restored. You could use your new password for Sign In."
          />
        </Form>
      </CenterWidget>
    )
  }
}

export default RestorePassword
