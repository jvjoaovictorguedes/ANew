package com.sadinamoda.web.domain.products;

import com.sadinamoda.web.domain.category.Category;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Products {
    @Id
    @GeneratedValue
    private UUID id;

    private String description;
    private BigDecimal price;
    private Integer quantity;
    private String image_url;

    @ManyToOne
    @JoinColumn(name = "id")
    private Category category_id;
}
