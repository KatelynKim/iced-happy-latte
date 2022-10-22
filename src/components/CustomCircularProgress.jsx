import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material'

const CustomCircularProgress = styled(CircularProgress)(() => ({
  position: 'absolute',
  left: '45%',
  top: '40%',
  transform: 'translate(-50%, -50%)',
  color: '#606c38'
}))

export default CustomCircularProgress
