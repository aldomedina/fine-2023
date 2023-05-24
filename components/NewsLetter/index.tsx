import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../Button";
import s from "./style.module.scss";
import classNames from "classnames";
import { ibm } from "@/pages";

const NewsLetter = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      toast.error(error);
      setIsSubmitting(false);
      return;
    }
    toast.success("Success! 🎉 You are now subscribed to our newsletter.");

    setEmail("");
    setIsSubmitting(false);
  };
  return (
    <form
      className={classNames(s.newsletter, ibm.className)}
      onSubmit={handleSubscribe}
    >
      <div className={s.inputWrapper}>
        <p className={s.label}>Subscribe to our newsletter</p>
        <input
          placeholder="Email"
          type="email"
          value={email}
          className={s.input}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <Button
        variant="outlined"
        className={s.button}
        type="submit"
        disabled={isSubmitting}
        fullWidth
      >
        SUBMIT
      </Button>
    </form>
  );
};

export default NewsLetter;
