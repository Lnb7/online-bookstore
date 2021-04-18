package com.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.onlinebookstore.entity.BookCategory;

@RepositoryRestResource(collectionResourceRel = "bookCategories", path = "book-catagory")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}
