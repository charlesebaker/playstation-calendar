interface ErrorBoxProps {
  message: string;
}

export const ErrorBox = ({ message }: ErrorBoxProps) => {
  return (
    <div className="text-red my-4 rounded-lg bg-red-100 p-4 text-center lg:p-8">
      <p>
        Sorry for the inconvenience. An unexpected error occurred. We're notified and working on it.
        Please try again later.
      </p>
      <p>
        If you need immediate assistance, please contact our support team at{" "}
        <a href="mailto:example@mail.com" className="font-semibold">
          example@mail.com
        </a>
        .
      </p>
      {message ? (
        <p className="italic">
          Error message: <span className="font-semibold">{message}</span>
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
