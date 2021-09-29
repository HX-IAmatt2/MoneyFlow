
const Balance = ({ balance }) => {
  return (
    <div style={{ height: '2rem', marginTop: '2rem' }}>
      Total balance: <span style={balance < 0 ? { fontWeight: 'bold', color: 'red' } : { fontWeight: 'bold' }}>${balance}</span>
    </div>
  )
}

export default Balance
