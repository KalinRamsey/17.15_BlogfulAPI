function makeUsersArray() {
  return [
    {
      id: 234,
      date_created: '2029-01-22T16:28:32.615Z',
      fullname: 'Sam Gamgee',
      username: 'sam.gamgee@shire.com',
      password: 'secret',
      nickname: 'Sam'
    },
    {
      id: 345,
      date_created: '2100-05-22T16:28:32.615Z',
      fullname: 'Peregrin Took',
      username: 'peregrin.took@shire.com',
      password: 'secret',
      nickname: 'Pippin'
    }
  ]
}

module.exports = {
  makeUsersArray
}