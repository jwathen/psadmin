import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
  }

  render() {
    return (
      <div>
        <h1>Manage Coures</h1>
        <CourseForm course={this.state.course} errors={this.state.errors} allAuthors={[]} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
  return { course };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
