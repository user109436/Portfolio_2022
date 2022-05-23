const menuIcon = document.getElementsByClassName("menu-icon")[0];
const navigation = document.getElementsByClassName("navigation")[0];
if (menuIcon && navigation) {
  const closeOpenMenu = () => {
    if (navigation.classList.contains("navigation-visible")) {
      return navigation.classList.remove("navigation-visible");
    }
    return navigation.classList.add("navigation-visible");
  };
  menuIcon.addEventListener("click", closeOpenMenu);
  navigation.querySelectorAll(".navigation__items--item").forEach((li) => {
    li.addEventListener("click", () => {
      closeOpenMenu();
    });
  });
}
