interface Props {
  children: React.ReactNode;
}

export default function LangLayout({ children }: Props) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
