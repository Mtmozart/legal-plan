export default function DateScreen() {
  const today = new Date();
  const hoje = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',  
    year: 'numeric',
  }).format(today);

  const dayFormate = hoje.charAt(0).toUpperCase() + hoje.slice(1)
  return (
    <div>
      <span>{dayFormate}</span>
    </div>
  );
}
