export type ChildrenProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  actionLabel: string;
  onclick: () => void;
  disabled?: boolean;
  outline?: boolean;
  customStyle?: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  body: React.ReactElement;
  header?: string;
};
