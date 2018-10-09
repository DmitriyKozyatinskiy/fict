import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

import { API } from './../../api';
import data from './../../json/data';
import { convertK3Data } from './../../utils/dataConvertor';
import { downloadExcelFileFromBase64 } from './../../utils/files';

import K3TableRow from './../../components/K3TableRow';

class K3Table extends Component {
  state = {
    data,
    sortField: null,
    sortType: 'asc'
  };

  onExport = () => {
    const { data, sortType, sortField } = this.state;
    const sortedData = sortField
      ? data.sort(
          (rowA, rowB) =>
            sortType === 'desc'
              ? rowA[sortField] - rowB[sortField]
              : rowB[sortField] - rowA[sortField]
        )
      : data;
    const values = convertK3Data(sortedData);
    API.exportK3({ values }).then(({ data }) =>
      downloadExcelFileFromBase64(data)
    );
  };

  onSort = fieldName =>
    this.setState(({ data, sortField, sortType }) => ({
      sort: fieldName,
      sortType: sortType === 'asc' ? 'desc' : 'asc',
      data: data.sort(
        (rowA, rowB) =>
          sortType === 'asc'
            ? rowA[fieldName] - rowB[fieldName]
            : rowB[fieldName] - rowA[fieldName]
      )
    }));

  render() {
    return (
      <div>
        <Button onClick={this.onExport}>Export to excel</Button>
        <Table id="k3Table" celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan="3">#</Table.HeaderCell>
              <Table.HeaderCell
                rowSpan="3"
                onClick={() => this.onSort('course')}
              >
                Факультет
              </Table.HeaderCell>
              <Table.HeaderCell
                rowSpan="3"
                onClick={() => this.onSort('disciplineTotal')}
              >
                Обсяг дисципліни
              </Table.HeaderCell>
              <Table.HeaderCell rowSpan="2" colSpan="3">
                Аудиторні заняття
              </Table.HeaderCell>
              <Table.HeaderCell rowSpan="2" colSpan="8">
                Контр.заходи
              </Table.HeaderCell>
              <Table.HeaderCell colSpan="4">К-ть груп</Table.HeaderCell>
              <Table.HeaderCell colSpan="4">К-ть студ.</Table.HeaderCell>
              <Table.HeaderCell
                rowSpan="3"
                onClick={() => this.onSort('flows')}
              >
                К-ть бюдж.потоків
              </Table.HeaderCell>
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
              <Table.HeaderCell onClick={() => this.onSort('lectureHours')}>
                Лекції
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('practiseHours')}>
                Практ.
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('labHours')}>
                Лабор.
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('exams')}>
                Екзамени
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('credits')}>
                Заліки
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('tests')}>
                Контр.роб.
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('courseProjects')}>
                Курсові пр.
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('courseWorks')}>
                Курсові роб.
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('RGRs')}>
                РГР
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('DKRs')}>
                ДКР
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('essays')}>
                Реферати
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('budgetGroups')}>
                Академ бюдж
              </Table.HeaderCell>
              <Table.HeaderCell
                onClick={() => this.onSort('practiceSubGroups')}
              >
                Підгр. для ПЗ
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('labSubGroups')}>
                Підгр. для лаб
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('bStudents')}>
                Б
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('kStudents')}>
                К
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('bkStudents')}>
                БК
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => this.onSort('kkStudents')}>
                КК
              </Table.HeaderCell>
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
            {this.state.data.map((row, i) => (
              <K3TableRow {...row} num={i + 1} key={i} />
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default K3Table;
