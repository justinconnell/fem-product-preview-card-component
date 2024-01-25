
export default function Price({ regularPrice, specialPrice }) {
  if (specialPrice) {
    return (
      <ul className="list-none flex  items-center">
        <li className="font-display text-[32px] leading-[32px] text-green">{specialPrice}</li>
        <li className="ml-5 text-[12px] line-through text-gray">{regularPrice}</li>
      </ul>
    );
  }
  return (
    <ul>
      <li className="font-display text-[32px] leading-[32px] text-green">{regularPrice}</li>
    </ul>
  );
}
