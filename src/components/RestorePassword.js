import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Form, Button, Label } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { restorePassword } from '../actions/restorePasswordAcrions'

const MAX_PASSWORD_LENGTH = 32

class RestorePassword extends Component {

  state = {
    beforeSubmit: true,
    password: '',
    confirmPassword: '',
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    restorePassword: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const restoreUUID = this.props.match.params.restore_uuid
    if (!restoreUUID || restoreUUID === '') {
      this.props.history.replace(`/app/restoreFailed`)
    }
  }

  handleUpdateComment = () => {
    const uuid = this.props.match.params.restore_uuid
    this.setState({
      beforeSubmit: false,
    })
    const password = this.getPassword()
    const confirmPassword = this.getConfirmPassword()
    if (
      password !== '' &&
      confirmPassword !== '' &&
      confirmPassword !== '' &&
      password === confirmPassword
    ) {
      this.props.restorePassword(uuid, password, confirmPassword, this.props.history)
      //this.props.history.replace(`/app/restoreSuccess`)
    }
  }

  renderPasswordError = () => {
    const password = this.getPassword()
    const { beforeSubmit } = this.state
    if (!beforeSubmit && password === '') {
      return (<Label basic color='red' pointing style={styles.errorLabel}>Please enter password</Label>)
    } else  if (!beforeSubmit && password !== '' && (password.length < 1 || password.length > MAX_PASSWORD_LENGTH)) {
      return (<Label basic color='red' pointing style={styles.errorLabel}>Please enter valid Password. Make sure, that your password contain 1...32 characters.</Label>)
    }
    return null
  }

  renderConfirmPasswordError = () => {
    const password = this.getPassword()
    const confirmPassword = this.getConfirmPassword()
    const { beforeSubmit } = this.state
    if (!beforeSubmit && password !== '' && confirmPassword === '' && password.length >= 1 && password.length <= MAX_PASSWORD_LENGTH) {
      return (<Label basic color='red' pointing style={styles.errorLabel}>Please confirm password</Label>)
    } else if (!beforeSubmit && password !== '' && password.length >= 1 && password.length <= MAX_PASSWORD_LENGTH && confirmPassword !== password) {
      return (<Label basic color='red' pointing style={styles.errorLabel}>Confirm password should be equal password</Label>)
    }
    return null
  }

  getPassword = () => this.state.password

  getConfirmPassword = () => this.state.confirmPassword

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            Restore Password
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Form>
            <Form.Field>
              <Form.Input
                fluid
                type="password"
                label='Password'
                placeholder='Enter password'
                value={this.state.password}
                onChange={(event) => {
                  this.setState({
                    password: event.target.value,
                  })
                }} />
              {this.renderPasswordError()}
            </Form.Field>
            <Form.Field>
              <Form.Input
                type="password"
                fluid
                label='Confirm Password'
                placeholder='Enter password again'
                value={this.state.confirmPassword}
                onChange={(event) => {
                  this.setState({
                    confirmPassword: event.target.value,
                  })
                }} />
              {this.renderConfirmPasswordError()}
            </Form.Field>
            <div style={{ display: 'flex',  justifyContent: 'center',} }>
              <Button style={{justifyContent: 'center', alignItems: 'center'} } color='blue' onClick={this.handleUpdateComment}>{'Submit'}</Button>
            </div>
          </Form>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  restorePassword(uuid, password, confirmPassword, history) {
    dispatch(restorePassword(uuid, password, confirmPassword, history));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestorePassword));

const styles = {
  errorLabel: {
    marginBottom: 0,
    marginTop: 0,
  }
}