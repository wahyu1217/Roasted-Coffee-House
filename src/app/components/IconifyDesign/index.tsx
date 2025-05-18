import { Icon } from '@iconify/react'

export const IconifyDesign = ({ icon }: { icon: string }) => {
  return (
    <div>
      <Icon icon={icon} className="w-6 h-6 text-white" />
    </div>
  )
}
