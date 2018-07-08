import React, { PureComponent } from 'react'
import { Form, Message } from 'semantic-ui-react'
import CenterWidget from './CenterWidget'

class RestorePassword extends PureComponent {
  render() {
    return (
      <CenterWidget>
        <Form error>
          <Message
            error
            header='Failed'
            content='Failed to restore password. Try again later.'
          />
        </Form>
      </CenterWidget>
    )
  }
}

export default RestorePassword;
