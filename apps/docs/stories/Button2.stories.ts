import { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "commerce-ui-scn/components/ui/button"

const meta = {
  title: "Shadcn-core/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const defaultButton: Story = {
  args: {
    children: "Shadcn Button",
  },
}
