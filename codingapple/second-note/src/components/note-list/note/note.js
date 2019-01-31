import React from 'react';
import './note.scss';
import ModalPage from './../../modal/modal';
import NoteRaw from './../../note-raw/note-raw';
//import Delete from './../../delete/delete';

class Note extends React.Component {
  state = {
    showEditModal: false,
    showDeleteModal: false
  };
  changeShowEditModal = () => {
    this.setState({
      showEditModal: !this.state.showEditModal
    });
  };
  changeShowDeleteModal = () => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    });
  };

  render() {
    return (
      <div id="note">
        <div id="note-menu">
          <span>{this.props.title}</span>
          <span>
            <span id="showChangeModal" onClick={this.changeShowEditModal}>
              편집
            </span>
            <span id="showDeleteModal" onClick={this.changeShowDeleteModal}>
              삭제
            </span>
          </span>
        </div>
        <div id="date">
          <span>
            {this.props.date.toISOString()}
            {this.props.edited && ' (edited)'}
          </span>
        </div>
        <div>{this.props.text}</div>
        {this.state.showEditModal && (
            <ModalPage>
                <NoteRaw subject={'노트 수정'}  notenumber={this.props.noteNumber} action={this.props.changeNote} close={this.changeShowEditModal} title={this.props.title} text={this.props.text}/>
            </ModalPage>
        )}
        {this.state.showDeleteModal && (<ModalPage>{/* */}</ModalPage>)}
      </div>
    );
  }
}

export default Note;