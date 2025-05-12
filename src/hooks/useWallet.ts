export function useWallet() {
  const connect = () => console.log('🔌 Wallet connected');
  const publicKey = 'Grant1DemoPubKey';
  return { connect, publicKey };
}
