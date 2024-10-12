import headerClass  from './Header.module.scss';

export const Header = () => {
   return (
      <header className={headerClass.header}>
         <div className={headerClass.container}>
            <a href="/" className={headerClass.link}>ToDo</a>
         </div>
      </header>
   )
}