import {Title} from "../../components/Title/Title";
import {Form} from "../../components/Form/Form";
import {InputFieldset} from "../../components/InputFieldset/InputFieldset";
import {Button} from "../../components/Button/Button";
import {Link} from "../../components/Link/Link";
import {signInPageCssProps} from "./SignInPageCssProps";
import {Input} from "../../components/Input/Input";
import {Label} from "../../components/Label/Label";

export const signInPageProps: Record<string, object> = {
    title: new Title({
        title: "Регистрация",
        cssClasses: signInPageCssProps.titleCss,
    }),
    content: new Form({
        action: "/chat",
        inputs: [
            new InputFieldset({
                cssClasses: signInPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        title: "Почта",
                        type: "text",
                        fieldName: "email",
                        cssClasses: signInPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Почта",
                        fieldName: "email",
                        cssClasses: signInPageCssProps.labelCss,
                    }),
                ]
            }),
            new InputFieldset({
                cssClasses: signInPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        title: "Логин",
                        type: "text",
                        fieldName: "login",
                        cssClasses: signInPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Логин",
                        fieldName: "login",
                        cssClasses: signInPageCssProps.labelCss,
                    }),
                ]
            }),
            new InputFieldset({
                cssClasses: signInPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        title: "Имя",
                        type: "text",
                        fieldName: "first_name",
                        cssClasses: signInPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Имя",
                        fieldName: "first_name",
                        cssClasses: signInPageCssProps.labelCss,
                    }),
                ]
            }),
            new InputFieldset({
                cssClasses: signInPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        title: "Фамилия",
                        type: "text",
                        fieldName: "second_name",
                        cssClasses: signInPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Фамилия",
                        fieldName: "second_name",
                        cssClasses: signInPageCssProps.labelCss,
                    }),
                ]
            }),
            new InputFieldset({
                cssClasses: signInPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        title: "Пароль",
                        type: "password",
                        fieldName: "password",
                        cssClasses: signInPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Пароль",
                        fieldName: "password",
                        cssClasses: signInPageCssProps.labelCss,
                    }),
                ]
            }),
            new InputFieldset({
                cssClasses: signInPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        title: "Пароль (ещё раз)",
                        type: "password",
                        fieldName: "checkPassword",
                        cssClasses: signInPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Пароль (ещё раз)",
                        fieldName: "checkPassword",
                        cssClasses: signInPageCssProps.labelCss,
                    }),
                ]
            }),
        ],
        button: new Button({
            title: "Зарегистрироваться",
            cssClasses: signInPageCssProps.buttonCss,
        }),
        cssClasses: signInPageCssProps.formCss,
    }),
    link: new Link({
        title: "Войти",
        link: "/",
        cssClasses: signInPageCssProps.linkCss,
    }),
};