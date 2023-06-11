import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import "./ManageDoctor.scss";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import { CRUD_ACTION, languages } from "../../../utils/constant.js";
import { getDetailDoctor } from "../../../services/userService";

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      selectedDoctors: "",
      description: "",
      listDoctors: [],
      hasOldData: false,
    };
  }

  componentDidMount() {
    this.props.fetchAllDoctorRedux();
    // this.props.saveDetailsDoctorAction();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.language !== this.props.language) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
  }

  // Finish!
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
    console.log("handleEditorChange", html, text);
  };
  handleSaveContentMarkdown = () => {
    let { hasOldData } = this.state;
    this.props.saveDetailsDoctor({
      contentHTML: this.state.contentHTML,
      contentmarkdown: this.state.contentMarkdown,
      doctorId: this.state.selectedDoctors.index,
      description: this.state.description,
      action: hasOldData === true ? CRUD_ACTION.EDIT : CRUD_ACTION.CREATE,
    });
    console.log("check state: ", this.state);
  };
  handleChangeSelect = async (selectedDoctors) => {
    this.setState({ selectedDoctors });
    let res = await getDetailDoctor(selectedDoctors.index);
    if (res && res.errorCode === 0 && res.data && res.data.Markdown) {
      let markdown = res.data.Markdown;
      console.log(markdown);
      this.setState({
        contentHTML: markdown.contentHTML,
        contentMarkdown: markdown.contentmarkdown,
        description: markdown.description,
        hasOldData: true,
      });
    } else {
      this.setState({
        contentHTML: "",
        contentMarkdown: "",
        description: "",
        hasOldData: false,
      });
    }
  };
  handleChangeDes = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  buildDataInputSelect = (inputData) => {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelEn = `${item.lastName} ${item.firstName}`;
        let labelVi = `${item.firstName} ${item.lastName}`;
        object.label = language === languages.VI ? labelVi : labelEn;
        object.index = item.id;
        result.push(object);
      });
    }
    return result;
  };
  render() {
    return (
      <React.Fragment>
        <div className="manage-doctor-container">
          <div className="manage-doctor-title">Tạo thêm thông tin doctor</div>
          <div className="more-info">
            <div className="content-left form-group">
              <label>Chọn bác sĩ</label>
              <Select
                value={this.state.selectedDoctors}
                onChange={this.handleChangeSelect}
                options={this.state.listDoctors}
              />
            </div>
            <div className="content-right form-group">
              <label>Thông tin giới thiệu</label>
              <textarea
                className="form-control"
                rows="4"
                onChange={(event) => this.handleChangeDes(event)}
                value={this.state.description}
              ></textarea>
            </div>
          </div>
          <div className="manage-content-editor">
            <MdEditor
              style={{ height: "500px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={this.handleEditorChange}
              value={this.state.contentMarkdown}
            />
          </div>
          <button
            type=""
            className="save-content-doctor"
            onClick={() => this.handleSaveContentMarkdown()}
          >
            {this.state.hasOldData === true ? (
              <span> Sửa thông tin </span>
            ) : (
              <span>Lưu thông tin</span>
            )}
          </button>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    allDoctors: state.admin.allDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctorRedux: () => dispatch(actions.fetchAllDoctor()),
    saveDetailsDoctor: (data) => dispatch(actions.saveDetailsDoctor(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
