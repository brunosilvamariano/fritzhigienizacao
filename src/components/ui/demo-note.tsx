export function DemoNote({
  children = 'Imagens ilustrativas. Consulte a indicação do serviço para sua peça.',
}: {
  children?: string;
}) {
  return <small className="demo-note">{children}</small>;
}
