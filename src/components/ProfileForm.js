import React from 'react';
import { withRouter } from 'react-router-dom';
import { Header, Form, Grid, Button } from 'semantic-ui-react';
import { saveProfile } from '../APIManager/profiles';

class ProfileForm extends React.Component {
  state = {
    username: '',
    about: ''
  };

  submitForm = () => {
    saveProfile({
      username: this.state.username,
      about: this.state.about
    })
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="image-form__container">
        <Header>
          Add a Profile
        </Header>
        <Grid>
          <Grid.Row centered>
            <Grid.Column largeScreen={4} computer={6} tablet={8} mobile={12}>
              <Form onSubmit={this.submitForm}>
                <Form.Field
                  control="input"
                  type="text"
                  label="Username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  placeholder="Username" />
                <Form.Field
                  control="input"
                  type="text"
                  label="About"
                  onChange={(e) => this.setState({ about: e.target.value })}
                  placeholder="About me" />
                <Button type="submit" content="Save" color="purple" />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default withRouter(ProfileForm);