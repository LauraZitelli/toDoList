import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public taskName = '';
  public taskList = [];

  public editing = false;
  public editList = [];
  private editIndex = null;
  public newTaskName = '';

  constructor() {}

  /**
   * Método que adiciona uma tarefa na lista.
   */
  public addTask(): void {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = '';
    }
  }

  /**
   * Método que deleta uma tarefa da lista.
   * @param index índice da tarefa a ser deletada.
   */
  public deleteTask(index: any): void {
    this.taskList.splice(index, 1);
  }

  /**
   * Método que guarda o index e item do array a ser editado.
   * @param index índice da tarefa a ser editada.
   */
  public editTask(index: any): void {
    this.editing = true;
    this.editList = this.taskList.slice(index, index + 1);
    this.editIndex = index;
  }

  /**
   * Método que faz a edição e atualiza o array.
   */
  public saveEditing(): void {
    let i = 0;
    for (i; i < this.taskList.length; i = i + 1) {
      if (i === this.editIndex) {
        this.taskList[i] = this.newTaskName;
      }
    }
    this.newTaskName = '';
    this.editing = false;
  }
}
