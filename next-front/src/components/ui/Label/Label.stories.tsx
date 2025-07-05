import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ["autodocs"],
  args: {
    htmlFor: "sample",
    children: "サンプルラベル",
    className: "sample-label",
    style: {
      fontSize: "14px",
      fontWeight: "400",
      color: "#374151",
      cursor: "pointer",
      lineHeight: "1.5",
      userSelect: "none",
      transition: "color 0.2s ease-in-out",
    },
  },
  // argTypesは指定しなくてもコンポーネント側のコメントが反映される！
  //   argTypes: {
  //     htmlFor: {
  //       control: "text",
  //       description: "ラベルに関連付けるinput要素のID",
  //     },
  //     children: {
  //       control: "text",
  //       description: "ラベルのテキスト",
  //     },
  //     className: {
  //       control: "text",
  //       description: "追加のクラス名",
  //     },
  //     style: {
  //       control: "object",
  //       description: "インラインスタイル",
  //     },
  //   },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // labelが存在することを確認
    const canvas = within(canvasElement);
    const label = canvas.getByRole("label");
    await expect(label).toBeInTheDocument();

    // labelのテキストが存在することを確認
    await expect(label).toHaveTextContent("サンプルラベル");

    // labelのクラス名が存在することを確認
    await expect(label).toHaveClass("sample-label");
  },
};

export const Email: Story = {
  args: {
    htmlFor: "email",
    children: "メールアドレス：",
    className: "email",
    style: {
      color: "blue",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByRole("label");
    await expect(label).toBeInTheDocument();

    // labelのテキストが存在することを確認
    await expect(label).toHaveTextContent("メールアドレス");
    // labelのクラス名が存在することを確認
    await expect(label).toHaveClass("email");
  },
};

export const PinkLabel: Story = {
  args: {
    htmlFor: "pink",
    children: "かわいいラベル🍩",
    className: "pink",
    style: {
      color: "white",
      backgroundColor: "pink",
      padding: "4px 8px",
      borderRadius: "2px",
      fontWeight: "500",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByRole("label");
    await expect(label).toBeInTheDocument();

    // labelのクラス名が存在することを確認
    await expect(label).toHaveClass("pink");

    // labelの背景がピンク色であることを確認
    await expect(label).toHaveStyle("background-color : rgb(255, 192, 203)"); // Tips: "pink"ではなくRGB値で指定しないとテスト判定できない
  },
};
