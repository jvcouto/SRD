const dbManager = {

  teacherIds: [0, 1, 2],
  teacherList: [{
    name: 'Rafael', titration: 'Mestre em IA', id: 0, userId: 0, cpf: '11458754322',
  }, {
    name: 'Isabela', titration: 'Doutor em Matematica computaciona', id: 1, userId: 0, cpf: '11458754322',
  }, {
    name: 'Ricardo', titration: 'Doutor em computação paralela', id: 2, userId: 0, cpf: '11458754322',
  }],

  generateId() {
    return Math.random();
  },

  idTeacherExists(id) {
    return id in this.teacherIds;
  },

  getTeacherList(userId) {
    return this.teacherList.filter((c) => c.userId === userId);
  },

  putTeacher(userId, teacher) {
    let id = this.generateId();
    while (this.idTeacherExists) { id = this.generateId(); }
    this.teacherIds.unshift(id);
    const dataTeacher = { ...teacher, userId, id };
    this.teacherList.unshift(dataTeacher);
  },

  deleteTeacher(userId, id) {
    this.teacherList = this.teacherList.filter((c) => c.id !== id);
    this.teacherIds = this.teacherIds.filter((c) => c.id !== id);
  },

  editTeacher(id, teacher) {
    const index = this.teacherList.map((c) => c.id === id).indexOf(true);
    this.teacherList[index] = teacher;
  },
};

export default dbManager;
