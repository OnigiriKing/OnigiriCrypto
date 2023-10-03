

export function changeClass(baseClass, newClass, check=true) {
    const classList = document.querySelector(baseClass).classList;
    check
      ? classList.contains(newClass)
        ? classList.remove(newClass)
        : classList.add(newClass)
      : classList.add(newClass);
  };