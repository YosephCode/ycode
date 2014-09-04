<article class="form" ng-controller="coments">
    
    <form>
        <h2 class="label">Talk with me!</h2>
        <br>
        <div class="angular-comentario" ng-repeat="u in users">
            <span><strong class="span-name">{{u.name}}</strong></span> || <span class="span-email">{{u.email}}</span><br>
            <span class="span.comentario">{{u.comentario}}</span>
            <hr>
            <br>
        </div>
        <br>
            <label>Name</label>
            <input type="text" ng-model="u.name" class="nome" required>
            <div class="hint">Escreva apenas o seu primeiro nome</div>
            <label>Email</label>
            <input type="email" ng-model="u.email" class="email" required>
            <div class="hint">Exemplo: meuemail@meuemail.com</div>
            <label>Message</label>
            <textarea class="textearea" ng-model="u.comentario" required></textarea>
            <div class="hint">É necessário preencher os três campos para adicionar seu comentário na página.</div>
            <br>
            <input type="submit" name="Submit" ng-click="adicionar(u)" ng-disabled="!(u.name && u.email && u.comentario)" class="sbmt" value="Submit" />
    </form> 
</article>
