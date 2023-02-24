import React, { Component } from 'react';
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";

export default class App extends Component {

  state = {
    inputName: '',
    modalImg: '',
    page: 1,
    showModal: false,
  }

  // отримати запит за імя ввденого зображення на 1 сторінку
  getInputValue = handleValue => {
    this.setState({ inputName: handleValue, page: 1 })
  }

  // показати/сховати модалку
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  // отримати велике зображення
  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  }

  // кнопка завантажити більше
  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { modalImg, showModal, page} = this.state;

    return (
      <>
        <Searchbar getInputValue={this.getInputValue}/>
        <ImageGallery inputName={this.state.inputName} onClick={this.getLargeImg} loadMoreBtn={this.loadMoreBtn} page={ page}/>
        {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
      </>
    )
  }
}