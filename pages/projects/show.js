import React, { Component } from 'react';
import { Card, Grid, Button, Statistic } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Project from '../../ethereum/project';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';


class ProjectShow extends Component {
  static async getInitialProps(props) {
    const project = Project(props.query.address);

    const summary = await project.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Project',
        description: 'https://github.com/OmnipotenceLLC',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'You must contribute at least this much wei to become an approver'
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description:
          'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description:
          'Number of people who have already donated to this project'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Project Balance (ether)',
        description:
          'The balance is how much money this project has left to spend.'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Project Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
                <Statistic>
                  <Statistic.Value>1,550</Statistic.Value>
                  <Statistic.Label>Downloads</Statistic.Label> <br/>
                </Statistic>
                             
                <br/> <Button>Learners, start here</Button> <br/>
              <Button secondary>Teachers, start here</Button> <br/>
              <Button primary>Parents, start here</Button> <br/>

            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/projects/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default ProjectShow;
