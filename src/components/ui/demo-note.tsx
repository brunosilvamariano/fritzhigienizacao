export function DemoNote({
  children = 'Conteúdo demonstrativo da referência Ariyana; não representa dados da Traço.',
}: {
  children?: string;
}) {
  return <small className="demo-note">{children}</small>;
}
