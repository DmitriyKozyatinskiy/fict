import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

import { API } from './../../api';
import disciplines from './../../json/data';
import { convertK3Data } from './../../utils/dataConvertor';
import { downloadExcelFileFromBase64 } from './../../utils/files';

import K3TableRow from './../K3TableRow';

class K3Table extends Component {
  onExport = () => {
    const values = convertK3Data(disciplines);
    API.exportK3({ values }).then(({ data }) =>
      downloadExcelFileFromBase64(data)
    );
  };

  render() {
    return (
      <div>
        <Button onClick={this.onExport}>Export to excel</Button>
        <Table id="k3Table" celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan="3">#</Table.HeaderCell>
              <Table.HeaderCell rowSpan="3">Факультет</Table.HeaderCell>
              <Table.HeaderCell rowSpan="3">Обсяг дисципліни</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2" colSpan="3">
                Аудиторні заняття
              </Table.HeaderCell>
              <Table.HeaderCell rowSpan="2" colSpan="8">
                Контр.заходи
              </Table.HeaderCell>
              <Table.HeaderCell colSpan="4">К-ть груп</Table.HeaderCell>
              <Table.HeaderCell colSpan="4">К-ть студ.</Table.HeaderCell>
              <Table.HeaderCell rowSpan="3">К-ть бюдж.потоків</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2" colSpan="12">
                РНН
              </Table.HeaderCell>
              <Table.HeaderCell rowSpan="3">Всього</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell colSpan="3">Бюджетні</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Академ.контр.</Table.HeaderCell>
              <Table.HeaderCell colSpan="2">Бюдж.гр.</Table.HeaderCell>
              <Table.HeaderCell colSpan="2">Контр.гр.</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Лекції</Table.HeaderCell>
              <Table.HeaderCell>Практ.</Table.HeaderCell>
              <Table.HeaderCell>Лабор.</Table.HeaderCell>
              <Table.HeaderCell>Екзамени</Table.HeaderCell>
              <Table.HeaderCell>Заліки</Table.HeaderCell>
              <Table.HeaderCell>Контр.роб.</Table.HeaderCell>
              <Table.HeaderCell>Курсові пр.</Table.HeaderCell>
              <Table.HeaderCell>Курсові роб.</Table.HeaderCell>
              <Table.HeaderCell>РГР</Table.HeaderCell>
              <Table.HeaderCell>ДКР</Table.HeaderCell>
              <Table.HeaderCell>Реферати</Table.HeaderCell>
              <Table.HeaderCell>Академ бюдж</Table.HeaderCell>
              <Table.HeaderCell>Підгр. для ПЗ</Table.HeaderCell>
              <Table.HeaderCell>Підгр. для лаб</Table.HeaderCell>
              <Table.HeaderCell>Б</Table.HeaderCell>
              <Table.HeaderCell>К</Table.HeaderCell>
              <Table.HeaderCell>БК</Table.HeaderCell>
              <Table.HeaderCell>КК</Table.HeaderCell>
              <Table.HeaderCell>Лекц.</Table.HeaderCell>
              <Table.HeaderCell>Практ.</Table.HeaderCell>
              <Table.HeaderCell>Лаб.</Table.HeaderCell>
              <Table.HeaderCell>Екз.</Table.HeaderCell>
              <Table.HeaderCell>Зал.</Table.HeaderCell>
              <Table.HeaderCell>Контр.Р</Table.HeaderCell>
              <Table.HeaderCell>КП</Table.HeaderCell>
              <Table.HeaderCell>Курс.р</Table.HeaderCell>
              <Table.HeaderCell>РГР</Table.HeaderCell>
              <Table.HeaderCell>ДКР</Table.HeaderCell>
              <Table.HeaderCell>Реф</Table.HeaderCell>
              <Table.HeaderCell>Конс</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {disciplines.map((discipline, i) => (
              <K3TableRow {...discipline} num={i + 1} key={i} />
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default K3Table;
