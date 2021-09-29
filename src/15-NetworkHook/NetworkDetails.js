import { useNetworkState } from 'react-use'

export default function NetworkDetails() {
  const networkData = useNetworkState()

  return (
    <div className="App">
      <label>Network data is : {JSON.stringify(networkData)}</label>
    </div>
  );
}