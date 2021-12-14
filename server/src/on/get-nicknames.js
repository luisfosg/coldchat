import { nicknames } from '../users.js'

const GetNicknames = ({ cb }) => {
  cb(Object.keys(nicknames))
}

export default GetNicknames
