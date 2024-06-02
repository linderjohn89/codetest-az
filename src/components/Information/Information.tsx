interface Props {
  message: string;
}

export function Information({ message }: Props) {
  return (
    <div className='information'>
      <p>{message}</p>
    </div>
  );
}
