import React from "react";
import s from './Dialogs.module.css';

const Dialogs = () =>{
    return(
        <div className={s.dialogsWrapper}>
            <div className={s.friendsList}>
                <h2>Контакты</h2>
                <div>
                    <ul>
                    <li className={`${s.item} ${s.active}`}>Сергей</li>
                    <li className={s.item}>Алена</li>
                    <li className={s.item}>Настя</li>
                    <li className={s.item}>Алиса</li>
                    <li className={s.item}>Толик</li>
                    <li className={s.item}>Оля</li>
                    <li className={s.item}>Дима</li>
                    <li className={s.item}>Влад</li>
                    <li className={s.item}>Миша</li>
                    <li className={s.item}>Леша</li></ul>
                </div>
            </div>
            <div className={s.dialog}>
                <h2>Сообщения</h2>
                <div className={`${s.message} ${s.sent} ${s.custom}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus dolore eaque explicabo hic illum in, libero minus, nam neque odit quasi quia quidem, repellendus temporibus tenetur unde vero voluptatem!</div>
                <div className={`${s.message} ${s.income} ${s.custom}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae corporis distinctio dolore enim error expedita, fuga illo illum impedit iste natus non odio placeat provident! Dolorum ex optio vero.</div>
                <div className={`${s.message} ${s.sent} ${s.custom}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, aliquam assumenda debitis dolores eveniet ex fugit in ipsum nulla perspiciatis placeat provident repudiandae sunt tempora. Accusantium laudantium nisi sapiente!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus dolore eaque explicabo hic illum in, libero minus, nam neque odit quasi quia quidem, repellendus temporibus tenetur unde vero voluptatem!</div>
                <div className={`${s.message} ${s.income} ${s.custom}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae corporis distinctio dolore enim error expedita, fuga illo illum impedit iste natus non odio placeat provident! Dolorum ex optio vero.</div>
                    <div className={`${s.message} ${s.income} ${s.custom}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae corporis distinctio dolore enim error expedita, fuga illo illum impedit iste natus non odio placeat provident! Dolorum ex optio vero.</div>
                <div className={`${s.message} ${s.sent} ${s.custom}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus dolore eaque explicabo hic illum in, libero minus, nam neque odit quasi quia quidem, repellendus temporibus tenetur unde vero voluptatem!</div>
                <div className={`${s.message} ${s.income} ${s.custom}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae corporis distinctio dolore enim error expedita, fuga illo illum impedit iste natus non odio placeat provident! Dolorum ex optio vero.</div>

                    <div className={`${s.message} ${s.sent} ${s.custom}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus dolore eaque explicabo hic illum in, libero minus, nam neque odit quasi quia quidem, repellendus temporibus tenetur unde vero voluptatem!</div>
                    <div className={`${s.message} ${s.sent} ${s.custom}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus dolore eaque explicabo hic illum in, libero minus, nam neque odit quasi quia quidem, repellendus temporibus tenetur unde vero voluptatem!</div>
                    <div className={`${s.message} ${s.sent} ${s.custom}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus dolore eaque explicabo hic illum in, libero minus, nam neque odit quasi quia quidem, repellendus temporibus tenetur unde vero voluptatem!</div>

            </div>

        </div>

    );
}
export default Dialogs;