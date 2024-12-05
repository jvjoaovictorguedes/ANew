package com.sadinamoda.web.domain.favorite;

import com.sadinamoda.web.domain.products.Products;
import com.sadinamoda.web.domain.users.Users;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "favorite")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Favorite {
    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "id")
    private Users user_id;

    @ManyToOne
    @JoinColumn(name = "id")
    private Products products_id;
}
