import React from 'react';
import { withRouter } from 'react-router-dom';
import { getProfiles } from '../APIManager/profiles';
import { Card, Container, Grid, Button, Image } from 'semantic-ui-react';

class ProfileList extends React.Component {

  state = {
    profiles: []
  }

  componentDidMount() {
    getProfiles().then(profiles => {
      this.setState({ profiles: profiles });
    });
  }

  render() {
    return (
      <Container className="profile-list__container">
        <Grid>
          <Grid.Row>
            {
              this.state.profiles.map(profile => {
                return (
                  <Grid.Column key={profile.id} largeScreen={4} computer={4} tablet={8} mobile={16}>
                    <Card className="profile__card">
                      <Image src={profile.photoUrl} />
                      <Card.Content>
                        <Card.Header>{profile.username}</Card.Header>
                        <Card.Description>{profile.about}</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                )
              })
            }
          </Grid.Row>
          <Grid.Row centered>
            <Button color="teal" content="Add New" onClick={() => this.props.history.push('/new')} />
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default withRouter(ProfileList);