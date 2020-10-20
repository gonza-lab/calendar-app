import React from 'react';

import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal as closeModalAction } from '../../actions/ui';

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const end = moment().minutes(0).seconds(0).add(2, 'hours');

export const CalendarModal = () => {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    title: 'Titulo de pruebas',
    notes: 'Nota1, nota2, nota3',
    startDate: now.toDate(),
    endDate: end.toDate(),
  });

  const { title, notes, startDate, endDate } = formValues;

  const closeModal = () => {
    dispatch(closeModalAction());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const momentStart = moment(startDate);
    // const momentEnd = moment(endDate);

    // if (momentStart.isSameOrAfter(momentEnd)) {
    //   console.log('La fecha 2 debe de ser mayor');

    // } else{
    //   console.log('asd')
    // }
  };

  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-fondo"
      className="animate__animated animate__backInDown modal"
      closeTimeoutMS={999}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            onChange={(e) =>
              handleInputChange({ target: { value: e, name: 'startDate' } })
            }
            value={startDate}
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            onChange={(e) =>
              handleInputChange({ target: { value: e, name: 'endDate' } })
            }
            value={endDate}
            minDate={startDate}
          />
        </div>

        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
