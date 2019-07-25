import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ApprovalBoxTable from 'components/approval/ApprovalBoxTable'

function TabContainer({children, dir}) {
  return (
    <div dir={dir} style={{padding: 8 * 3}}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class FullWidthTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  handleChangeIndex = index => {
    this.setState({value: index});
  };

  render() {
    const {theme} = this.props;

    return (
      <div className="w-100">
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="on"
          >
            <Tab className="tab" label="진행결재함" />
            <Tab className="tab" label="대기결재함" />
            <Tab className="tab" label="반려결재함" />
            <Tab className="tab" label="완료결재함" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><ApprovalBoxTable></ApprovalBoxTable></TabContainer>
          <TabContainer dir={theme.direction}><ApprovalBoxTable></ApprovalBoxTable></TabContainer>
          <TabContainer dir={theme.direction}><ApprovalBoxTable></ApprovalBoxTable></TabContainer>
          <TabContainer dir={theme.direction}><ApprovalBoxTable></ApprovalBoxTable></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withStyles(null, {withTheme: true})(FullWidthTabs);